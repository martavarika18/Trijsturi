
function nolasa() {
    const malas = document.getElementsByClassName("mala");

    const m1 = parseFloat(mala1.value);
    const m2 = parseFloat(mala2.value);
    const m3 = parseFloat(mala3.value);

    if (m1 > 0 && m2 > 0 && m3 > 0) {//pārbauda vai malu gaurmi ir lielāki par 0
        console.log({ m1, m2, m3 });
        return (m1, m2, m3);
    } else {
        console.log(false);
        return false;
    }
}

function perimetrs(m1, m2, m3) {

    const m = nolasa();
    m1 = m.m1; m2 = m.m2; m3 = m.m3;


    const perimetrs = m1 + m2 + m3;
    console.log(perimetrs);
}
function laukums(m1, m2, m3) {
    const pusp = (m1 + m2 + m3) * 0.5;
    console.log(pusp);

    const laukums = Math.sqrt(pusp * (pusp - m1) * (pusp - m2) * (pusp - m3));

    console.log(laukums);
    return laukums;
}
function irTrijsturis(m1, m2, m3) {


    if (m1 < m2 + m3 && m2 < m1 + m3 && m3 < m1 + m2) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}

function rezultats(m1, m2, m3) {
    const m = nolasa();
    m1 = m.m1; m2 = m.m2; m3 = m.m3;
    console.log(m1, m2, m3);
    if (!nolasa()) {
        t = "Ievadītie dati ir nekorekti";
    } else {
        if (irTrijsturis(m1, m2, m3) == false) {
            t = "Trijstūris neeksistē, jo jebkuru 2 malu garumu summai ir jābūt lielākai par trešo malu!";
        } else {
            t = "Trijstūris ar malu garumiem " + m1 + " , " + m2 + " , " + m3 + " eksistē";
            if (m1 == m2 && m2 == m3) {
                t += "Vienādmalu trijstūris";
            } else {
                if (m1 == m2 || m2 == m3 || m1 == m3) {
                    t += "Vienādsānu trijstūris";
                }
            }

            const p = perimetrs(m1, m2, m3);
            const s = Math.round(laukums(m1, m2, m3) * 100) / 100;
            t += "Perimetrs ir " + perimetrs + " un laukums ir " + laukums + ".";

        }
    }
    console.log(t);
    return t;
}

function izvadaTekstu() {
    const teksts = rezultats()
    console.log(teksts);
    const sakne = document.getElementById("izvade");
    const raksti = document.createElement("perimetrs");
    sakne.innerHTML = teksts;
    sakne.appendChild(raksti);

}




