import uk_gov_dash_components
import dash
from dash.dependencies import Input, Output
from dash import html

app = dash.Dash(__name__)

unique_las = ["LA1", "LA2", "LA3"]
la_lookups = {"LA1":["SUBLA1", "SUBLA2", "SUBLA3"], "LA2":["SUBLA4", "SUBLA5", "SUBLA6"], "LA3":["SUBLA7", "SUBLA8", "SUBLA9"]}

app.layout = html.Div([
    uk_gov_dash_components.Dropdown(
        label="Something",
        id='local_authority',
        source=unique_las,
        value="",
        style={"minWidth": "50%"}
    ),

    uk_gov_dash_components.Dropdown(
        label="Comparison",
        id='comparison',
        source=[],
        value=None,
        style={"minWidth": "50%"}
    ),
    html.Div(id='output')
])

@app.callback(
    Output('comparison', 'source'), 
    Output('comparison', 'value'), 
    Output('comparison', 'rerender'), 
    [Input('local_authority', 'value')])
def update_comparison(value):
    if value is None or value == "":
        return [[], None, False]
    return [la_lookups[value], None, True]


if __name__ == '__main__':
    app.run_server(debug=True)