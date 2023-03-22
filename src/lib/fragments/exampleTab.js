
<!DOCTYPE html>
<html lang="en" class="govuk-template app-example-page__wrapper">
  <head>
    <meta charset="utf-8">
    <title>Tabs – Example - GOV.UK Design System</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <meta name="theme-color" content="#0b0c0c"> 
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

      <link rel="shortcut icon" sizes="16x16 32x32 48x48" href="/assets/images/favicon.ico" type="image/x-icon">
      <link rel="mask-icon" href="/assets/images/govuk-mask-icon.svg" color="#0b0c0c"> 
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/govuk-apple-touch-icon-180x180.png">
      <link rel="apple-touch-icon" sizes="167x167" href="/assets/images/govuk-apple-touch-icon-167x167.png">
      <link rel="apple-touch-icon" sizes="152x152" href="/assets/images/govuk-apple-touch-icon-152x152.png">
      <link rel="apple-touch-icon" href="/assets/images/govuk-apple-touch-icon.png">

  <meta name="robots" content="noindex, nofollow">
  <meta name="og:title" content="Tabs">
  <meta name="description" content="">
  <meta name="og:description" content="">
  <link rel="canonical" href="https://design-system.service.gov.uk/components/tabs/default/">

  <link href="/stylesheets/main-776819115c397bf0aa8e0528cd28f65c.css" rel="stylesheet" media="all">

    
    <meta property="og:image" content="https://design-system.service.gov.uk/assets/images/govuk-opengraph-image.png">
  </head>
  <body class="govuk-template__body app-example-page">
    <script>document.body.className = ((document.body.className) ? document.body.className + ' js-enabled' : 'js-enabled');</script>



  <!-- Disable browser validation for any examples that include form elements -->
  <form action="/form-handler" method="post" novalidate>
      

<div class="govuk-tabs" data-module="govuk-tabs">
  <h2 class="govuk-tabs__title">
    Contents
  </h2>
  <ul class="govuk-tabs__list">
        <li class="govuk-tabs__list-item govuk-tabs__list-item--selected">
          <a class="govuk-tabs__tab" href="#past-day">
            Past day
          </a>
        </li>
        <li class="govuk-tabs__list-item">
          <a class="govuk-tabs__tab" href="#past-week">
            Past week
          </a>
        </li>
        <li class="govuk-tabs__list-item">
          <a class="govuk-tabs__tab" href="#past-month">
            Past month
          </a>
        </li>
        <li class="govuk-tabs__list-item">
          <a class="govuk-tabs__tab" href="#past-year">
            Past year
          </a>
        </li>
  </ul>
      <div class="govuk-tabs__panel" id="past-day">
          <h2 class="govuk-heading-l">Past day</h2>
<table class="govuk-table">
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th scope="col" class="govuk-table__header">Case manager</th>
      <th scope="col" class="govuk-table__header">Cases opened</th>
      <th scope="col" class="govuk-table__header">Cases closed</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">David Francis</td>
          <td class="govuk-table__cell">3</td>
          <td class="govuk-table__cell">0</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Paul Farmer</td>
          <td class="govuk-table__cell">1</td>
          <td class="govuk-table__cell">0</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Rita Patel</td>
          <td class="govuk-table__cell">2</td>
          <td class="govuk-table__cell">0</td>
        </tr>
  </tbody>
</table>


      </div>
      <div class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-week">
          <h2 class="govuk-heading-l">Past week</h2>
<table class="govuk-table">
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th scope="col" class="govuk-table__header">Case manager</th>
      <th scope="col" class="govuk-table__header">Cases opened</th>
      <th scope="col" class="govuk-table__header">Cases closed</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">David Francis</td>
          <td class="govuk-table__cell">24</td>
          <td class="govuk-table__cell">18</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Paul Farmer</td>
          <td class="govuk-table__cell">16</td>
          <td class="govuk-table__cell">20</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Rita Patel</td>
          <td class="govuk-table__cell">24</td>
          <td class="govuk-table__cell">27</td>
        </tr>
  </tbody>
</table>


      </div>
      <div class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-month">
          <h2 class="govuk-heading-l">Past month</h2>
<table class="govuk-table">
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th scope="col" class="govuk-table__header">Case manager</th>
      <th scope="col" class="govuk-table__header">Cases opened</th>
      <th scope="col" class="govuk-table__header">Cases closed</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">David Francis</td>
          <td class="govuk-table__cell">98</td>
          <td class="govuk-table__cell">95</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Paul Farmer</td>
          <td class="govuk-table__cell">122</td>
          <td class="govuk-table__cell">131</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Rita Patel</td>
          <td class="govuk-table__cell">126</td>
          <td class="govuk-table__cell">142</td>
        </tr>
  </tbody>
</table>


      </div>
      <div class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-year">
          <h2 class="govuk-heading-l">Past year</h2>
<table class="govuk-table">
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th scope="col" class="govuk-table__header">Case manager</th>
      <th scope="col" class="govuk-table__header">Cases opened</th>
      <th scope="col" class="govuk-table__header">Cases closed</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">David Francis</td>
          <td class="govuk-table__cell">1380</td>
          <td class="govuk-table__cell">1472</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Paul Farmer</td>
          <td class="govuk-table__cell">1129</td>
          <td class="govuk-table__cell">1083</td>
        </tr>
        <tr class="govuk-table__row">
          <td class="govuk-table__cell">Rita Patel</td>
          <td class="govuk-table__cell">1539</td>
          <td class="govuk-table__cell">1265</td>
        </tr>
  </tbody>
</table>


      </div>
</div>


  </form>


  <script src="/javascripts/govuk-frontend-5c91565fc114f6eaa5a2d6e81a4040a4.js"></script>
  <script src="/javascripts/example-02c50ae02b7f2cb9a16519237a3cd987.js"></script>
  <script src="/javascripts/vendor/iframeResizer-f84640649221ac9f454568fe1b541fd6.contentWindow.min.js"></script>
  </body>
</html>