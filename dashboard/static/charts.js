fetch("/logs")
  .then((res) => res.json())
  .then((data) => {
    const ipCounts = {};
    data.forEach((log) => {
      const ip = log.src_ip || log.src_host;
      if (ip) ipCounts[ip] = (ipCounts[ip] || 0) + 1;
    });

    const labels = Object.keys(ipCounts);
    const values = Object.values(ipCounts);

    new Chart(document.getElementById("ipChart"), {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Attack Count",
            data: values,
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgb(6, 71, 71)",
          },
        ],
      },
    });
  });
