function solve() {
    const label = document.querySelector('#info span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    let stop = {
        next: 'depot'
    };
    async function depart() {
        // get info for next stop
        // display next stop
        departBtn.disabled = true;
        const url = ` http://localhost:3030/jsonstore/bus/schedule/${stop.next}`
        const res = await fetch(url);

        stop = await res.json();

        label.textContent = `Next stop ${stop.name}`;

        arriveBtn.disabled = false;
    }

    function arrive() {
        departBtn.disabled = false;
        arriveBtn.disabled = true;
        label.textContent = `Arriving at ${stop.name}`
    }

    return {
        depart,
        arrive
    };
}

let result = solve();