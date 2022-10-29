document.getElementById("mobile-menu").style.display = "none";

function mostrar_menu(){        

        var displayMenu = document.getElementById("mobile-menu");               

        if(displayMenu.style.display == "none"){
            displayMenu.style.display = "block";
            document.getElementById("footer").style.display = "none"; 
        }else{
            displayMenu.style.display = "none";
            document.getElementById("footer").style.display = "block"; 
        }

}

function mostrar_opcoes(id){

    var el = document.getElementById(""+id);

    var antigoId = get_controle_menu_mobile();

    if(antigoId == id){
        el.innerHTML = "";
        set_controle_menu_mobile("");
    }else{
        if(antigoId == ""){
            el.innerHTML = "";
            el.innerHTML = 
            "<button class='col'>"+
                "<span style='color: #252525;font-size: 15px;font-weight: 600;'>TESTE</span>"+
            "</button>";
        }else{
            document.getElementById(""+antigoId).innerHTML = "";
            el.innerHTML = "";
            el.innerHTML = 
            "<button class='col'>"+
                "<span style='color: #252525;font-size: 15px;font-weight: 600;'>TESTE</span>"+
            "</button>";
        }
        set_controle_menu_mobile(id);
    }        
}

var displaySelect = "";

function set_controle_menu_mobile(id){
    displaySelect = id;
}

function get_controle_menu_mobile(){
    return displaySelect;
}