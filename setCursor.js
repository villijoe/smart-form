!function(e){"use strict";e.fn.setCursor=function(t){var s=e.extend({after:!1,start:!1,end:!0,select:!1},t),n=e(this),r=n.val().length;n.focus(),s.after&&(r=s.after),s.start&&(r=0),s.select||n[0].setSelectionRange(r,r),s.select&&n[0].select()}}(jQuery);

