export function footerFunction() {
    const footer = document.createElement("footer");
    footer.classList.add("footer_content");
    footer.innerHTML = `
    <div class="footer_sec">
        <div class="footer_logo">
            <img class="logo_img" src="/frontend/asset/img/logo_footer.png" alt="logo_img">
        </div>

        <div class="footer_contenido">
                <br>Lima (+51) 1 500 - 8800 <br>
                <br>Ica (+056) 480 - 102<br>
                <br>Tarapoto (+042) 522 - 714<br>
                <br>contacto@villachicken.com.pe<br>
        </div>

    </div>

    <div class="footer_sec">
        <div class="footer_logo">
           <h3>NOSOTROS</h3>
        </div>

        <div class="footer_contenido">
               <br>Misión,Visión y Valores<br>
               <br>Facturación<br>
               <br>Escríbenos<br>
               <br>Trabaja con Nosotros<br>
        </div>

    </div>

    <div class="footer_sec">
        <div class="footer_logo">
           <h3>POLITICAS Y TERMINOS</h3>
        </div>

        <div class="footer_contenido">
               <br>Términos y Condiciones<br>
               <br>Políticas de privacidad<br>
               <br>Libro de Reclamaciones<br> 
        </div>

    </div>
   
    
    `;

    return footer;
}