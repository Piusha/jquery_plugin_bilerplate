# Jquery Plugin

Create plugins based on features. This will easy for engineering team to manage specific feature related javascript files separately. 

i.e if I am doing the notification section What I would do I will create separate plugin 
for that. Inside that plugin I will handle all server calls, UI renderings and front end logics.

By creating separate files for features will easy browser to render rather than entire file at once (some thing similar to lazy loading). Also later on we can implement javascript compiler to the system where each JS file can be build individually.

## Self invoking scrip

Put plugin self invoking script under any scripting file. Change the selector and options

## Using blade Yield

Create Yield tag where you want to load javascript file in the layout file

i.e 

    `@yeild('js')`


Invoke js attribute as a section in pages 

i.e
    
    `<div>
        .....

        @section('js')
            <script src="js/jquery_plugin.js"></script>
            <script>
            
                jQuery('.class-selector').jqueryPluginTemplate({
						apiUrl:'APIURL'
					})
            
            </script>
        .....
        @endsection
    </div>`