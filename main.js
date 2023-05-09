const btn = document.getElementById("btn");


btn.onclick = function () {
    const hesen = parseInt(document.getElementById("hesen").value);
    const elvin = parseInt(document.getElementById("Elvin").value);
    const teyyub = parseInt(document.getElementById("Teyyub").value);

    const ortalama = (hesen + elvin + teyyub) / 3

    const hesen1 = document.createElement("td");
    const elvin1 = document.createElement("td");
    const teyyub1 = document.createElement("td");
    const bal = document.createElement("td");

    hesen1.textContent = hesen;
    elvin1.textContent = elvin;
    teyyub1.textContent = teyyub;
    bal.textContent = ortalama;

    const tr = document.createElement("tr");

    tr.appendChild(hesen1);
    tr.appendChild(elvin1);
    tr.appendChild(teyyub1);
    tr.appendChild(bal);

    tablo.appendChild(tr);



};
const ag = document.getElementById('white')
const gara = document.getElementById('black')

ag.onclick = function(){
    const ss = document.querySelector('.bb');
    ss.style.backgroundImage = "url('img/f3.jpeg')";
    ss.style.backgroundSize = "cover"
    ss.style.backgroundRepeat = "no-repeat"
}
gara.onclick = function(){
    const ss = document.querySelector('.bb');
    ss.style.backgroundImage = "url('img/f2.jpg')";
    ss.style.backgroundSize = "cover"
    ss.style.backgroundRepeat = "no-repeat"
}