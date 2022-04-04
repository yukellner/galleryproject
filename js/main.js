console.log('Starting up');

function init(){
    renderprojects()
}


function renderprojects(){
    var projs = getProjects()
    console.log('projs',projs)


    var curstr = projs.map( proj => 

        "<div class='col-md-4 col-sm-6 portfolio-item'>"+
        "<a class='portfolio-link' data-toggle='modal' href='#portfolioModal1'>"+
            "<div class='portfolio-hover'>"+
              "<div class='portfolio-hover-content'>"+
                "<i class='fa fa-plus fa-3x'></i>"+
              "</div>"+
            "</div>"+
            "<img class='img-fluid' src='img/portfolio/"+proj.name+"-thumbnail.jpg' alt=''>"+
          "</a>"+
          "<div class='portfolio-caption'>"+
            "<h4>"+proj.name+"</h4>"+
            "<p class='text-muted'>Illustration</p>"+
          "</div>"+
        "</div>"
        
        
        
        
        
        
        
    )

    

    $('.portfolio-grid').html(curstr)
}

function sendemail(){
debugger
    alert($('textarea').value)


    var k = $('#content-email')
    console.log('k',k)
    debugger
}