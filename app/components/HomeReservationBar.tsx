"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ChevronIcon from "./ChevronIcon";

type GiteOption = {
  value: string;
  label: string;
  maxPeople: number;
};

const GITE_OPTIONS: GiteOption[] = [
  { value: "all", label: "Tous les gîtes", maxPeople: 15 },
  { value: "la-loge", label: "La Loge (4-6 personnes)", maxPeople: 6 },
  { value: "le-cepage", label: "Le Cépage (9 personnes)", maxPeople: 9 },
  { value: "la-grande-pauverdiere", label: "L'ensemble (15 personnes)", maxPeople: 15 }
];

const WEEK_DAYS = ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"];

const monthFormatter = new Intl.DateTimeFormat("fr-FR", {
  month: "long",
  year: "numeric"
});

const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric"
});

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function isSameDay(firstDate: Date, secondDate: Date): boolean {
  return (
    firstDate.getFullYear() === secondDate.getFullYear()
    && firstDate.getMonth() === secondDate.getMonth()
    && firstDate.getDate() === secondDate.getDate()
  );
}

function toIsoDate(date: Date): string {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// function getNightCount(arrivalDate: Date, departureDate: Date): number {
//   const millisecondsPerDay = 1000 * 60 * 60 * 24;
//   return Math.round((departureDate.getTime() - arrivalDate.getTime()) / millisecondsPerDay);
// }

function getCalendarDaysForMonth(monthDate: Date): Array<Date | null> {
  const firstDayOfMonth = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
  const lastDayOfMonth = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0);
  const leadingEmptyCells = (firstDayOfMonth.getDay() + 6) % 7;

  const days: Array<Date | null> = [];
  for (let index = 0; index < leadingEmptyCells; index += 1) {
    days.push(null);
  }

  for (let day = 1; day <= lastDayOfMonth.getDate(); day += 1) {
    days.push(new Date(monthDate.getFullYear(), monthDate.getMonth(), day));
  }

  while (days.length % 7 !== 0) {
    days.push(null);
  }

  return days;
}

export default function HomeReservationBar() {
  const router = useRouter();
  const [selectedGite, setSelectedGite] = useState<string>("all");
  const [people, setPeople] = useState<number>(2);

  const maxPeople = GITE_OPTIONS.find((option) => option.value === selectedGite)?.maxPeople ?? 15;
  const [arrivalDate, setArrivalDate] = useState<Date | null>(null);
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const [calendarAnchor, setCalendarAnchor] = useState<"arrival" | "departure">("arrival");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [displayMonth, setDisplayMonth] = useState<Date>(() => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1);
  });
  const calendarPanelRef = useRef<HTMLDivElement>(null);
  const reservationCardRef = useRef<HTMLElement>(null);
  const stickyTriggerTopRef = useRef<number>(0);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [stickyPlaceholderHeight, setStickyPlaceholderHeight] = useState<number>(0);

  const today = useMemo(() => startOfDay(new Date()), []);
  const currentMonthStart = useMemo(() => new Date(today.getFullYear(), today.getMonth(), 1), [today]);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (!calendarPanelRef.current) {
        return;
      }

      if (!calendarPanelRef.current.contains(event.target as Node)) {
        setIsCalendarOpen(false);
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  useEffect(() => {
    const reservationCard = reservationCardRef.current;
    if (!reservationCard || typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Mesurer la position initiale UNE SEULE FOIS (carte pas encore sticky)
    const rect = reservationCard.getBoundingClientRect();
    stickyTriggerTopRef.current = window.scrollY + rect.top;
    setStickyPlaceholderHeight(rect.height);

    const updateStickyState = () => {
      if (mediaQuery.matches) {
        setIsSticky(false);
        return;
      }

      setIsSticky(window.scrollY + 10 >= stickyTriggerTopRef.current);
    };

    updateStickyState();
    window.addEventListener("scroll", updateStickyState, { passive: true });
    window.addEventListener("resize", updateStickyState);
    mediaQuery.addEventListener("change", updateStickyState);

    return () => {
      window.removeEventListener("scroll", updateStickyState);
      window.removeEventListener("resize", updateStickyState);
      mediaQuery.removeEventListener("change", updateStickyState);
    };
  }, []);

  const visibleMonths = useMemo(() => {
    return [0, 1].map((monthOffset) => {
      const monthDate = new Date(displayMonth.getFullYear(), displayMonth.getMonth() + monthOffset, 1);
      return {
        key: `${monthDate.getFullYear()}-${monthDate.getMonth()}`,
        title: monthFormatter.format(monthDate),
        days: getCalendarDaysForMonth(monthDate)
      };
    });
  }, [displayMonth]);

  const canGoToPreviousMonth = displayMonth.getTime() > currentMonthStart.getTime();

  const openCalendar = (anchor: "arrival" | "departure") => {
    setCalendarAnchor(anchor);
    setIsCalendarOpen(true);

    const referenceDate = anchor === "arrival" ? arrivalDate : departureDate ?? arrivalDate;
    if (!referenceDate) {
      return;
    }

    setDisplayMonth(new Date(referenceDate.getFullYear(), referenceDate.getMonth(), 1));
  };

  const handleDateSelection = (selectedDate: Date) => {
    if (selectedDate.getTime() < today.getTime()) {
      return;
    }

    if (calendarAnchor === "arrival") {
      setArrivalDate(selectedDate);
      if (departureDate && selectedDate.getTime() >= departureDate.getTime()) {
        setDepartureDate(null);
      }
      setErrorMessage("");
      setCalendarAnchor("departure");
      return;
    }

    if (!arrivalDate) {
      setArrivalDate(selectedDate);
      setErrorMessage("");
      return;
    }

    if (selectedDate.getTime() <= arrivalDate.getTime()) {
      setArrivalDate(selectedDate);
      setDepartureDate(null);
      setErrorMessage("");
      return;
    }

    setDepartureDate(selectedDate);
    setErrorMessage("");
    setIsCalendarOpen(false);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!arrivalDate || !departureDate) {
      setErrorMessage("Merci de sélectionner une date d'arrivée et une date de départ.");
      return;
    }

    if (departureDate.getTime() <= arrivalDate.getTime()) {
      setErrorMessage("La date de départ doit être après la date d'arrivée.");
      return;
    }

    if (!Number.isInteger(people) || people < 1 || people > 15) {
      setErrorMessage("Le nombre de personnes doit être compris entre 1 et 15.");
      return;
    }

    const searchParams = new URLSearchParams();
    searchParams.set("arrivee", toIsoDate(arrivalDate));
    searchParams.set("depart", toIsoDate(departureDate));
    searchParams.set("voyageurs", String(people));

    if (selectedGite !== "all") {
      router.push(`/${selectedGite}?${searchParams.toString()}`);
    } else {
      router.push(`/les-gites?${searchParams.toString()}`);
    }
  };

  return (
    <>
      {isSticky && <div className="home-reservation-sticky-placeholder" style={{ height: stickyPlaceholderHeight }} aria-hidden="true"></div>}
      <aside ref={reservationCardRef} className={`home-reservation-card${isSticky ? " is-sticky" : ""}`} aria-label="Recherche de disponibilite">
      <form className="home-reservation-form" onSubmit={onSubmit}>
        <label className="home-reservation-field" htmlFor="home-gite-select">
          {/* <span>Gîte</span> */}
          <select
            id="home-gite-select"
            value={selectedGite}
            onChange={(event) => {
              const newGite = event.target.value;
              setSelectedGite(newGite);
              const newMax = GITE_OPTIONS.find((option) => option.value === newGite)?.maxPeople ?? 15;
              if (people > newMax) {
                setPeople(newMax);
              }
            }}
          >
            {GITE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <div className="home-reservation-field home-reservation-field--dates" ref={calendarPanelRef}>
          {/* <div className="home-reservation-field home-date-triggers">
            <span>Arrivée</span>
            <span>Départ</span>
          </div> */}
          <div className="home-date-triggers">
            <button
              className={`date-trigger${isCalendarOpen && calendarAnchor === "arrival" ? " is-active" : ""}`}
              type="button"
              onClick={() => openCalendar("arrival")}
              aria-expanded={isCalendarOpen}
              aria-haspopup="dialog"
            >
              {/* <span className="date-trigger-label">Arrivée</span> */}
              <span className="date-trigger-value">{arrivalDate ? dateFormatter.format(arrivalDate) : "Arrivée"}</span>
            </button>

            <button
              className={`date-trigger${isCalendarOpen && calendarAnchor === "departure" ? " is-active" : ""}`}
              type="button"
              onClick={() => openCalendar("departure")}
              aria-expanded={isCalendarOpen}
              aria-haspopup="dialog"
            >
              {/* <span className="date-trigger-label">Depart</span> */}
              <span className="date-trigger-value">{departureDate ? dateFormatter.format(departureDate) : "Départ"}</span>
            </button>
          </div>

          {isCalendarOpen && (
            <div className="calendar-popover" role="dialog" aria-label="Selection des dates">
              <div className="calendar-header">
                <button
                  type="button"
                  className="calendar-nav-button"
                  onClick={() => {
                    if (!canGoToPreviousMonth) {
                      return;
                    }

                    setDisplayMonth(new Date(displayMonth.getFullYear(), displayMonth.getMonth() - 1, 1));
                  }}
                  aria-label="Mois precedent"
                  disabled={!canGoToPreviousMonth}
                >
                  <ChevronIcon className="calendar-nav-icon" direction="left" color="#6d675f" />
                </button>
                <strong className="calendar-month-title">{visibleMonths[0].title}</strong>
                <strong className="calendar-month-title">{visibleMonths[1].title}</strong>
                <button
                  type="button"
                  className="calendar-nav-button"
                  onClick={() => setDisplayMonth(new Date(displayMonth.getFullYear(), displayMonth.getMonth() + 1, 1))}
                  aria-label="Mois suivant"
                >
                  <ChevronIcon className="calendar-nav-icon" direction="right" color="#6d675f" />
                </button>
              </div>

              <div className="calendar-months">
                {visibleMonths.map((month) => (
                  <section className="calendar-month" key={month.key} aria-label={`Calendrier ${month.title}`}>
                    {/* <strong className="calendar-month-title">{month.title}</strong> */}

                    <div className="calendar-weekdays">
                      {WEEK_DAYS.map((dayLabel) => (
                        <span key={`${month.key}-${dayLabel}`}>{dayLabel}</span>
                      ))}
                    </div>

                    <div className="calendar-grid">
                      {month.days.map((dayValue, index) => {
                        if (!dayValue) {
                          return <span key={`${month.key}-empty-${index}`} className="calendar-day-empty" aria-hidden="true"></span>;
                        }

                        const isDisabled = dayValue.getTime() < today.getTime();
                        const isSelectedStart = arrivalDate ? isSameDay(dayValue, arrivalDate) : false;
                        const isSelectedEnd = departureDate ? isSameDay(dayValue, departureDate) : false;
                        const isInRange = Boolean(
                          arrivalDate
                          && departureDate
                          && dayValue.getTime() > arrivalDate.getTime()
                          && dayValue.getTime() < departureDate.getTime()
                        );

                        return (
                          <button
                            key={dayValue.toISOString()}
                            type="button"
                            className={`calendar-day${isSelectedStart || isSelectedEnd ? " is-selected" : ""}${isInRange ? " is-in-range" : ""}`}
                            onClick={() => handleDateSelection(dayValue)}
                            disabled={isDisabled}
                          >
                            {dayValue.getDate()}
                          </button>
                        );
                      })}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          )}
        </div>

        <label className="home-reservation-field" htmlFor="home-people-input">
          {/* <span>Participants</span> */}
          <select
            id="home-people-input"
            value={people}
            onChange={(event) => setPeople(Number(event.target.value))}
          >
            {Array.from({ length: maxPeople }, (_, index) => {
              const participantCount = index + 1;
              return (
                <option key={participantCount} value={participantCount}>
                  {participantCount}
                </option>
              );
            })}
          </select>
        </label>

        <button className="classic-button home-search-button" type="submit">
          Rechercher
        </button>

        {/* {nightCount > 0 && (
          <p className="home-night-count" aria-live="polite">
            {nightCount} nuit{nightCount > 1 ? "s" : ""} sélectionnée{nightCount > 1 ? "s" : ""}
          </p>
        )} */}

        {errorMessage && (
          <p className="home-reservation-error" aria-live="polite">
            {errorMessage}
          </p>
        )}
      </form>
      </aside>
    </>
  );
}
