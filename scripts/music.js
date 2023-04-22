function show_this1() {
    b = document.getElementById("MUCC");
    a = document.getElementById("Homurauta");
    if (b.innerHTML == '') {
        b.innerHTML = `
        <img src='./картиночки/обложки/mucc_homurauta.jpeg' alt='' height='100px' width='100px'>
        <h3>MUCC - Homurauta</h3>
        <ul>
        <li><h2>Homurauta</h2></li>
        <li><h2>Zetsubou</h2></li>
        <li><h2>Shiawase no shuuchaku</h2></li>
        <li><h2>Kimi ni sachi are</h2></li>
        <li><h2>Kurayami ni saku hana</h2></li>
        <li><h2>Suimin</h2></li>
        <li><h2>Kaeranu hito</h2></li>
        </ul>
        `;
        a.innerHTML=`<h3>закрыть</h3>;`;
    }
    else if (b.innerHTML != ''){
        b.innerHTML = '';
        a.innerHTML = 
        `
        
          <img src='./картиночки/обложки/mucc_homurauta.jpeg' alt='' width="300px" height="300px">
          <h3>MUCC - Homurauta</h3>
        
        `;
        // // <li><h2>Zutazuta</h2></li>
        // <li><h2>Sekai no owari</h2></li>
        // <li><h2>Samidare</h2></li>
        // <li><h2>Uso de yugami shinzou</h2></li>
        // <li><h2>Oyoge! Taiyaki-kun</h2></li>
        // <li><h2>Maee</h2></li>
        // <li><h2>Kokuen</h2></li>
        // <li><h2>Boku ga hontou no boku ni taekirezu...</h2></li>
        // <li><h2>Mama</h2></li>
    }
}

function show_this2() {
    b = document.getElementById("MUCC");
    a = document.getElementById("Gokusai");
    if (b.innerHtml == '') {
        b.innerHTML = `
        <img src='./картиночки/обложки/mucc gokusai' alt=''>
        <ul>
        <li><h2></h2></li>
        </ul>
        `;

    }
    else if (b.innerHTML != '') {
        b.innerHtml = '';
        a.innerHTML = `
        <h3>MUCC - Gokusai</h3>
        `;
    }
}