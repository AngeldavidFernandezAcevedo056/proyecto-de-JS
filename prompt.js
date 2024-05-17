dineroCofla = prompt("cuanto dinero tienes cofla?");
dineroPedro = prompt("cuanto dinero tienes pedro?");
dineroJuan = prompt("cuanto dinero tienes juan?");
// >=    <=
dineroCofla = parseFloat(dineroCofla)
if (dineroCofla >= 0.6 && dineroCofla < 1 )  {
    alert("cofla,comprate el helado mas barato que es el de aire");
    alert("y te sobran " + (dineroCofla - 0.6))
}

else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("cofla, comprate el helado de vainilla");
    alert("y te sobran " + (dineroCofla - 1))
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7 ) {
    alert("cofla, comprate el helado de chocolate");
    alert("y te sobran " + (dineroCofla - 1.6))
}
else if (dineroCofla >= 1.7 && dineroCofla < 2.9 ) {
    alert("cofla, compra el de arroz");
    alert("y te sobran " + (dineroCofla - 1.7))
}
else if (dineroCofla >= 2.9 ) {
    alert("cofla,compra el helado de oro con chocolates");
    alert("y te sobran " + (dineroCofla - 2.9))
}
else  {
    alert("cofla, sal de la tienda pobre");
}
dineroPedro = parseFloat( dineroPedro );

if (dineroPedro >= 0.6 && dineroPedro < 1 )  {
    alert("pedro,comprate el elado mas barato que es el de aire");
    alert("y te sobran " + (dineroPedro - 0.6))
}
else if (dineroPedro>= 1 && dineroPedro < 1.6 ) {
    alert("pedro, comprate el elado de vainilla");
    alert("y te sobran " + (dineroPedro - 1))
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7 ) {
    alert("pedro, comprate el elado de chocolate");
    alert("y te sobran " + (dineroPedro - 1.6))
}
else if (dineroPedro >= 1.7 && dineroPedro < 2.9 ) {
    alert("pedro, compra el de arroz");
    alert("y te sobran " + (dineroPedro - 1.6))
}
else if (dineroPedro >= 2.9 ) {
    alert("pedro, compra el de oro con chocolates");
    alert("y te sobran " + (dineroPedro - 2.9))
}
else  {
    alert("pedro, sal de la tienda pobre");

}
dineroJuan = parseFloat(dineroJuan);
if (dineroJuan >= 0.6 && dineroJuan < 1 )  {
    alert("juan,comprate el elado mas barato que es el de aire");
    alert("y te sobran " + (dineroJuan - 0.6))
}
else if (dineroJuan >= 1 && dineroJuan < 1.6 ) {
    alert("juan, comprate el elado de vainilla");
    alert("y te sobran " + (dineroJuan - 1))
}
else if (dineroJuan >= 1.6 && dineroJuan < 1.7 ) {
    alert("juan, comprate el elado de chocolate");
    alert("y te sobran " + (dineroJuan - 1.6));
}
else if (dineroJuan >= 1.7 && dineroJuan < 2.9 ) {
    alert("juan, compra el de arroz");
    alert("y te sobran " + (dineroJuan - 1.7));
}
else if (dineroJuan >= 2.9 ) {
    alert("juan, compra el de oro con chocolates");
    alert("y te sobran " + (dineroJuan - 2.9));
}
else  {
    alert("juan, sal de la tienda pobre");
}

