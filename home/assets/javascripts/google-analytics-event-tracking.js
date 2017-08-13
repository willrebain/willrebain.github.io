window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga('create', 'UA-42466615-1', 'auto');

ga('require', 'cleanUrlTracker', {
  trailingSlash: 'remove'
});
ga('require', 'maxScrollTracker');
ga('require', 'mediaQueryTracker', {
  definitions: [
    {
      name: 'Breakpoint',
      dimensionIndex: 1,
      items: [
        {name: 'sm', media: 'all'},
        {name: 'md', media: '(min-width: 768px)'},
        {name: 'lg', media: '(min-width: 1200px)'}
      ]
    },
    {
      name: 'Pixel Density',
      dimensionIndex: 2,
      items: [
        {name: '1x',   media: 'all'},
        {name: '1.5x', media: '(min-resolution: 144dpi)'},
        {name: '2x',   media: '(min-resolution: 192dpi)'}
      ]
    },
    {
      name: 'Orientation',
      dimensionIndex: 3,
      items: [
        {name: 'landscape', media: '(orientation: landscape)'},
        {name: 'portrait',  media: '(orientation: portrait)'}
      ]
    }
  ]
});
ga('require', 'outboundLinkTracker', {
  events: ['click', 'auxclick', 'contextmenu']
});
ga('require', 'pageVisibilityTracker', {
  sendInitialPageview: true,
});

ga('send', 'pageview');

var GoogleAnalyticsHelpers;
(function (GoogleAnalyticsHelpers) {
    function sendEvent(category, action, element, value) {
        var title = element.getAttribute('title') ? element.getAttribute('title') : '';
        var label = title.length === 0 ? element.textContent.trim() : title;
        ga('send', {
            hitType: 'event',
            eventCategory: category,
            eventAction: action.trim(),
            eventLabel: label ? label : null,
            eventValue: value ? value : null
        });
    }
    GoogleAnalyticsHelpers.sendEvent = sendEvent;
})(GoogleAnalyticsHelpers || (GoogleAnalyticsHelpers = {}));

$('.homepage').on('click', '.btn', function(event) {
    GoogleAnalyticsHelpers.sendEvent('Home', event.currentTarget.textContent, event.currentTarget);
});
$('.navbar').on('click', '.navbar-toggle', function(event) {
    GoogleAnalyticsHelpers.sendEvent('Home', 'Toggle Navigation Menu', event.currentTarget);
});
$('.navbar').on('click', '.navbar-brand, .navbar-nav a', function(event) {
    GoogleAnalyticsHelpers.sendEvent('Home', 'Navigate', event.currentTarget);
});
