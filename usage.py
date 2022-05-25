import uk_gov_dash_components
import dash

app = dash.Dash(__name__)

app.layout = uk_gov_dash_components.UkGovDashComponents(id='component')


if __name__ == '__main__':
    app.run_server(debug=True)
