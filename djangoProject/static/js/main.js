// A $( document ).ready() block.
$( document ).ready(function() {

    function ShowSideNav(){
        $( "#page-expandable-nav-example-nav-toggle" ).attr( "aria-expanded", "true" ),
        $( "#wt-nav-toggle").removeClass("pf-m-collapsed").addClass("pf-m-expanded");
    }
    
    function HideSideNav(){
        $( "#page-expandable-nav-example-nav-toggle" ).attr( "aria-expanded", "false" ),
        $( "#wt-nav-toggle").removeClass("pf-m-expanded").addClass("pf-m-collapsed");
    }
    
    // click functions
    //Show Hide Sidenavbar
    $('#page-expandable-nav-example-nav-toggle').on('click', function () {
        if ($( "#page-expandable-nav-example-nav-toggle" ).attr( "aria-expanded" ) == 'true') {
            HideSideNav()
        } else {
            ShowSideNav()
        }
      })
      
    console.log( "ready!" );
});