// Vendors -------------------------------------------------------------------------------------------------------------
window.$ = window.jQuery = require('../../node_modules/jquery/dist/jquery.slim.min');
require('../../node_modules/bootstrap/dist/js/bootstrap.bundle.min');
require('startbootstrap-sb-admin-2/vendor/jquery-easing/jquery.easing.js');
require('startbootstrap-sb-admin-2/js/sb-admin-2');
if (window.location.pathname.includes(Routing.generate('chat_room'))) {
    require('../_js/message_form');
    require('../_js/chat');
}