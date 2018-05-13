export default function returnPie4() {
	let hello = function(){return(Math.floor(Math.random() * Math.floor(10)))};
  return {
    datasets: [{
        label: "1",
        data: [hello(), hello(), hello()],
        backgroundColor: ["#6884FB", "#FEBE65", "#0F3FD5"],
    },
    {
        label: "2",
        data: [hello(), hello(), hello(), hello(), hello(), hello()],
        backgroundColor: ["#6884FB", "#FEBE65", "#0F3FD5", "#6884FB", "#FEBE65", "#0F3FD5"],
    },
    {
        label: "3",
        data: [hello(), hello(), hello(), hello(), hello(), hello()],
        backgroundColor: ["#6884FB", "#FEBE65", "#0F3FD5", "#6884FB", "#FEBE65", "#0F3FD5"],
    },
    {
        label: "4",
        data: [hello(), hello(), hello(), hello(), hello(), hello()],
        backgroundColor: ["#6884FB", "#FEBE65", "#0F3FD5", "#6884FB", "#FEBE65", "#0F3FD5"],
    },
    {
        label: "5",
        data: [13],
        backgroundColor: ["#6884FB"],
    }]
  };
}
