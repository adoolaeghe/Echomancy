export default function returnPie4(scroll) {
  return {
    datasets: [{
        label: "1",
        data: [10, 20, 30],
        backgroundColor: ["#6884FB", "#FEBE65", "#0F3FD5"],
    },
    {
        label: "2",
        data: [13, 20, 23, 12, 34, 23],
        backgroundColor: ["#6884FB", "#FEBE65", "#0F3FD5", "#6884FB", "#FEBE65", "#0F3FD5"],
    },
    {
        label: "3",
        data: [5, 10, 33, 12, 34, 23],
        backgroundColor: ["#6884FB", "#FEBE65", "#0F3FD5", "#6884FB", "#FEBE65", "#0F3FD5"],
    },
    {
        label: "4",
        data: [13, 20, 23, 12, 34, 23],
        backgroundColor: ["#6884FB", "#FEBE65", "#0F3FD5", "#6884FB", "#FEBE65", "#0F3FD5"],
    },
    {
        label: "5",
        data: [13],
        backgroundColor: ["#6884FB"],
    }]
  };
}
