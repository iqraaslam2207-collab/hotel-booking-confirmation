document.addEventListener("DOMContentLoaded", function () {
  const copyBtn = document.querySelector(".copy-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      navigator.clipboard.writeText("soleil-2026").then(function () {
        copyBtn.textContent = "COPIED";
        setTimeout(function () {
          copyBtn.textContent = "COPY";
        }, 1600);
      });
    });
  }

  const printBtn = document.querySelector(".btn-light");
  if (printBtn) {
    printBtn.addEventListener("click", function () {
      window.print();
    });
  }

  const calendarBtn = document.querySelector(".btn-dark");
  if (calendarBtn) {
    calendarBtn.addEventListener("click", function () {
      const ics = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "BEGIN:VEVENT",
        "SUMMARY:Maison Soleil — La Garrigue",
        "DTSTART:20260425T150000",
        "DTEND:20260429T110000",
        "LOCATION:12 Rue des Oliviers, Cassis",
        "DESCRIPTION:Booking MS-2026 0421-AH",
        "END:VEVENT",
        "END:VCALENDAR",
      ].join("\r\n");
      const blob = new Blob([ics], { type: "text/calendar" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "maison-soleil-stay.ics";
      link.click();
    });
  }

  const panels = {
    0: ".receipt-card",
    1: ".host-card",
    2: ".info-card:nth-of-type(1)",
    3: ".info-card:nth-of-type(2)",
    4: ".info-card:nth-of-type(3)",
  };

  document.querySelectorAll(".sidebar ul li").forEach(function (item, index) {
    item.style.cursor = "pointer";
    item.addEventListener("click", function () {
      document.querySelectorAll(".sidebar ul li").forEach(function (row) {
        row.classList.remove("active");
      });
      item.classList.add("active");
      const target = document.querySelector(panels[index]);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
});
