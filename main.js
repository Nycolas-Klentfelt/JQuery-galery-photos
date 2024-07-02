$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagen = $('#endereco-imagen-nova').val();
        //.val só se usa em JQuery, é igual .value
        const novoItem = $('<li style="display: none;"></li>');

        $(`<img src="${enderecoDaNovaImagen}"/>`).appendTo(novoItem);

        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagen}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagen em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(2000);
        $('#endereco-imagen-nova').val('')
    });
})

