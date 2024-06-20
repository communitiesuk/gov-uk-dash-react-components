import uk_gov_dash_components
import dash
from dash.dependencies import Input, Output
from dash import html, dcc

app = dash.Dash(__name__)

unique_las = ["LA1", "LA2", "LA3"]
unique_las_dicts = [
    {"label": "LA1", "value": "LA1"},
    {"label": "LA2", "value": "LA2", "disabled": True},
    {"label": "LA3", "value": "LA3"},
]
la_lookups = {
    "LA1": [
        {"label": "SUBLA1", "value": "SUBLA1val"},
        {"label": "SUBLA2", "value": "SUBLA2val"},
        {"label": "SUBLA3", "value": "SUBLA3val"},
    ],
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
        ariaLabel="Clickable Li item example",
    ),
]

app.layout = html.Div(
    [
        html.Div([], id="menu-open"),
        uk_gov_dash_components.Dropdown(
            label="Something",
            id="local_authority",
            source=unique_las_dicts,
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
        uk_gov_dash_components.Tabs(
            children=[
                html.Div([html.H1("I am a jitter plot")]),
                html.Div([html.H1("I am a time series plot")]),
            ],
            defaultTab=0,
            tabHeadings=["Display jitter plots", "Display time series plots"],
        ),
        uk_gov_dash_components.Radios(
            options=["a", "b"], value="b", id="test", title="Which do you prefer?"
        ),
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


@app.callback(
    Output("menu-open", "children"),
    [Input("local_authority", "menu_open")],
)
def update_comparison(menu_open):
    if menu_open:
        return "menu is open"
    else:
        return "menu is closed"


if __name__ == "__main__":
    app.run_server(debug=True)
