
        var redirect_object={"redirect_text":"Choose another country or region to see content specific to your location and shop online.","redirect_rules":[{"country":"Canada","country_code":"CA","region_code":"*","redirect_url":"https://menudesignshop.com/"},{"country":"United States of America","country_code":"US","region_code":"*","redirect_url":"https://menudesignshop.com/"}],"whitelist_urls":[],"general_settings":{"ask_again_in_days":"1","default_country_code":["US"],"force_redirect":false}}

        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
        head.appendChild(link);
    
    
    var cookie_time = redirect_object.general_settings.ask_again_in_days;
              
    var default_country = redirect_object.general_settings.default_country_code;
    
    var autoredirect = redirect_object.general_settings.force_redirect;
    
    var store = redirect_object.redirect_rules;
    localStorage.setItem('Country_value', JSON.stringify(store));
      const button_text = 'Continue'
      const css_markup = `
    
            @-webkit-keyframes slideUp{
                0%{
                    -webkit-transform:translateY(-66px);
                    transform:translateY(-66px)
                }
                100%{
                    -webkit-transform:translateY(0);
                    transform:translateY(0)
                }
            }
            @keyframes slideUp{
                0%{
                    -webkit-transform:translateY(-66px);
                    -ms-transform:translateY(-66px);
                    transform:translateY(-66px)
                }
                100%{
                    -webkit-transform:translateY(0);
                    -ms-transform:translateY(0);
                    transform:translateY(0)
                }
            }
            .geo-ip-background-color{
                color: #fff; /* Change text color here */
                background-color: #444; /* Change background color here */
                display: none;
                text-align: center;
                position: absolute;
                top:0px;
                left:0;
                right:0;
                z-index: 100000;
                box-shadow: 0 0 5px rgba(0,0,0,0.4);
                opacity: 0;
                visibility: hidden;
                font-size: 12px;
            }
        #se-cookies-message{
          display: -webkit-box;
                display: -moz-box;
                display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;
    
                -webkit-align-items: center;
                -moz-align-items: center;
                -ms-align-items: center;
                -o-align-items: center;
                -ms-flex-align: center;
                align-items: center;
    
                -webkit-justify-content: space-around;
                -moz-justify-content: space-around;
                -ms-justify-content: space-around;
                -o-justify-content: space-around;
                justify-content: space-around;
        }
            #se-cookies-message-container.se-cookies-message-open {
                opacity: 1;
                visibility: visible;
    
                animation-duration:0.8s;
                -webkit-animation-duration:0.8s;
                -moz-animation-duration:0.8s;
                -o-animation-duration:0.8s;
                -webkit-animation-name:slideUp;
                animation-name:slideUp;
    
                
            }
        .geo-ip-banner-dropdown-color select{
          background: #575757;
          color: #fff;
          margin: 0;
          cursor: pointer;
          padding-top: 7px;
                padding-left: 18px;
                padding-bottom: 7px;
          border: 1px solid #949494;
            border-radius: 2px;
          font-size: 16px;
          display: none;
        }
        .geo-ip-banner-dropdown-color{  
              position: relative;
              z-index: 2;
        }
        .country-btn{
              display: flex;
              flex-flow: row;
              justify-content: center;
              align-items: center;
          padding-left: 10px;
            }
        @media screen and (min-width: 1150px) {
          .geo-ip-banner-dropdown-color select{
            min-width: 250px;
          }
        }
            .geo-ip-banner-dropdown-color i{
                position: absolute;
                right: 10px;
                top: 30%;
                pointer-events: none;
            }
        .geo-ip-banner-dropdown-color select option{
          background: #575757;
          color: #fff;
          cursor: pointer;
        }
            .geo-ip-banner-button-color {
                background: linear-gradient(#42a1ec, #0070c9);
                border-color: #07c;
                color: #fff;
                transition: background 200ms ease-in-out,color 200ms ease-in-out,box-shadow 200ms ease-in-out;
                -webkit-transition: background 200ms ease-in-out,color 200ms ease-in-out,box-shadow 200ms ease-in-out;
                border-radius: 5px;
                -webkit-border-radius: 5px;
                text-decoration: none;
                font-size: 12px;
                padding: 8px 15px;
          display: inline-block;
          margin-left: 20px;
            }
            .geo-ip-banner-button-color:hover {
                opacity: 0.8;
            }
            .se-cookies-text {
              padding-right: 15px;
              font-size: 12px;
              line-height: 1.5;
              font-weight: 400;
              letter-spacing: 1px;
          text-align: left;
            }
        .geo-ip-banner-close-icon-color i{
          color: #777;
                font-size: 20px;
                font-weight: lighter;
        }
        .geo-ip-banner-close-icon-color{
          margin-left: 15px;
          display: inline-block;
        }
            @media screen and (min-width: 768px) {
                #se-cookies-message {
                    padding: 15px 30px;
                    font-size: 17px;
                }
          
                .geo-ip-banner-button-color {
                    font-size: 16px;
                    padding: 7px 30px;
                }
                .se-cookies-text {
                    padding-right: 0;
                }
            }
         @media screen and (max-width: 767px) {
          #se-cookies-message {
            flex-flow: column;
                }
          .se-cookies-text{
            margin-top: 10px;
          }
          .geo-ip-banner-close-icon-color{
            position: absolute;
                    right: 15px;
                    top: 15px;
          }
          .country-btn{
            justify-content: space-around;
            width: 100%;
          }
          .se-cookies-text, .country-btn {
            margin-bottom: 10px;
          }
        }
    
      `;
      
      const div_markup = `
        <div id="se-cookies-message-container" class="geo-ip-background-color geo-ip-banner">
    <div class="page-width">
          <div id="se-cookies-message">
        
            <div class="se-cookies-text">
              ${redirect_object.redirect_text} 
            </div>
            
            <div class="country-btn">
              <div id="se-cookies-dropdown" class="select-group geo-ip-banner-dropdown-color">
    
            </div>
            <a href="javascript:INS_CloseCookiesWindow();" id="se-accept-cookies-checkbox" class="geo-ip-banner-button-color">${button_text}</a>
            <a href="javascript:INS_CloseWindow();" id="se-close" class="geo-ip-banner-close-icon-color"><i class="fa fa-close" aria-hidden="true"></i></a>
            </div>
            
            </div>
          </div>
    
        </div>
      `;
      
      
      var div_elem = document.createElement('div')
      div_elem.innerHTML=div_markup
      document.body.appendChild(div_elem)
    
    var div = document.querySelector("#se-cookies-dropdown"),
    frag = document.createDocumentFragment(),
    select = document.createElement("select");
    
    var customer_country;
    
    var xmlhttp;
      if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
      } else {
        // code for older browsers
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
    var urls = 'https://pro.ip-api.com/json/?key=DIABWONxOMNMOrp';
    
    var country_selected;
    
    xmlhttp.onreadystatechange = function() {
      
        if (this.readyState == 4 && this.status == 200) {
            var data_array = JSON.parse(this.responseText);
        customer_country = data_array.country;
        var customer_country_code = data_array.countryCode;
        
        for(var key in redirect_object.redirect_rules) {
              var store_arr = redirect_object.redirect_rules[key];
              var country_value;
              var option;
              country_value = store_arr.country;
              var country_code = store_arr.country_code;
              var redirect_url = store_arr.redirect_url;

              if(customer_country_code == country_code){
                  if(autoredirect == true){
                    const current_url = window.location.href
                    const current_domain = new URL(current_url).hostname
                    //console.log(current_domain);
                    const redirect_domain = new URL(redirect_url).hostname
                    //console.log(redirect_domain);
                    if (current_domain !== redirect_domain) {
                      window.location.href = redirect_url;
                    }
                  } else{
                    //show banner
                    document.getElementById('se-cookies-message-container').style.display = 'block';
                    var height = document.querySelector("#se-cookies-message-container").offsetHeight;
                    document.querySelector('body').style.paddingTop = height + 'px';
                  }
                  option = new Option(country_value,redirect_url, true, true)
                  select.options.add( option );
                  country_selected = 'true';
              } else {
                if(country_code == default_country && country_selected != 'true'){
                  option = new Option(country_value,redirect_url, true, true)
                  select.options.add( option );
                } else {
                  option = new Option(country_value,redirect_url)
                  select.options.add( option );
                }
              }
        }
        document.getElementById('select_dropdown').style.display = 'block';
        }
    
    };
    xmlhttp.open("GET", 'https://pro.ip-api.com/json/?key=DIABWONxOMNMOrp', true);
    xmlhttp.send();
    
    frag.appendChild(select);
    
    div.appendChild(frag);
    select.setAttribute("id", "select_dropdown");
    
    var str = '<i class="fa fa-angle-down" aria-hidden="true"></i>';
    div.insertAdjacentHTML( 'beforeend', str );
    
      var css_elem = document.createElement('style')
      css_elem.innerHTML=css_markup
      document.body.appendChild(css_elem)
    
      function INS_setCookie (name, value, days) {
        var expires = "";
        if (days) {
          var date = new Date();
          date.setTime(date.getTime() + (days*24*60*60*1000));
          expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
      }
    
      function INS_getCookie (name) {
        var pair = document.cookie.match(new RegExp(name + '=([^;]+)'));
        return !!pair ? pair[1] : null;
      }
    
      var cookiesName = 'cookies_accepted';
    
      function INS_CheckCookies () {
        if(!INS_getCookie(cookiesName)) {
          var cookies_message = document.getElementById("se-cookies-message-container");
          cookies_message.className += " se-cookies-message-open";
        //document.querySelector('body').style.marginTop = '71px';
        }
      }
      function INS_CloseWindow(){
        INS_setCookie(cookiesName, true, cookie_time);
        document.getElementById("se-cookies-message-container").remove();
        document.querySelector('body').style.paddingTop = '0';
      }
    
      function INS_CloseCookiesWindow () {
        //INS_setCookie(cookiesName, true, cookie_time);
      var e = document.getElementById("select_dropdown");
      var strUser = e.options[e.selectedIndex].value;
      window.location = strUser;
        
      }
    
      if(document.readyState === "complete") {
        INS_CheckCookies(); }
      else {
          document.addEventListener('DOMContentLoaded', function () {
            INS_CheckCookies();
          });
      }
      /* 190227 */

  