import uk_gov_dash_components
import dash
from dash.dependencies import Input, Output
from dash import html, dcc

app = dash.Dash(__name__)

unique_las = ["LA1", "LA2", "LA3"]
la_lookups = {
    "LA1": ["SUBLA1", "SUBLA2", "SUBLA3"],
    "LA2": ["SUBLA4", "SUBLA5", "SUBLA6"],
    "LA3": ["SUBLA7", "SUBLA8", "SUBLA9"],
}
side_menu = [
    html.Li(
        dcc.Link(
            "About",
            href="www.github.com",
            className="govuk-link govuk-link--no-visited-state",
        ),
        className="moj-side-navigation__item moj-side-navigation__item--active",
    ),
    uk_gov_dash_components.ExpandableMenuItem(
        title="Compare Local Authorities",
        children=[
            html.Li(
                html.A(
                    "Option 1",
                    href="https://www.github.com",
                    className="govuk-link govuk-link--no-visited-state",
                ),
                className="moj-side-navigation__item moj-side-navigation__item--active",
            ),
            html.Li(
                html.A(
                    "Option 2",
                    href="https://www.bbc.co.uk",
                    className="govuk-link govuk-link--no-visited-state",
                ),
                className="moj-side-navigation__item moj-side-navigation__item--active",
            ),
        ],
        expandedClass="EXPANDED",
        collapsedClass="COLLAPSED",
        ariaLabel="Clickable Li item example"
    ),
]

app.layout = html.Div(
    [
        uk_gov_dash_components.Dropdown(
            label="Something",
            id="local_authority",
            source=unique_las,
            value="",
            style={"minWidth": "50%"},
        ),
        uk_gov_dash_components.Dropdown(
            label="Comparison",
            id="comparison",
            source=[],
            value=None,
            style={"minWidth": "50%"},
        ),
        html.Div(id="output"),
        html.Nav(side_menu),
    ]
)


@app.callback(
    Output("comparison", "source"),
    Output("comparison", "value"),
    [Input("local_authority", "value")],
)
def update_comparison(value):
    if value is None or value == "":
        return [[], None]
    return [la_lookups[value], None]


if __name__ == "__main__":
    app.run_server(debug=True)
