import uk_gov_dash_components
import dash
from dash.dependencies import Input, Output
from dash import html

app = dash.Dash(__name__)

app.layout = html.Div([
    uk_gov_dash_components.Dropdown(
        label="Something",
        id='input',
        source=[
            {"label": "Some label", "value": "Afghanistan"},
            {"label": "Some test ", "value": "Akrotiri"},
            {"label": "Some vb", "value": "Albania"},
        ],
        value="",
        style={"minWidth": "50%"}
    ),

    uk_gov_dash_components.Dropdown(
        label="Comparison",
        id='comparison',
        source=["A"],
        value="",
        style={"minWidth": "50%"}
    ),
    html.Div(id='output')
])


@app.callback(Output('output', 'children'), [Input('input', 'value')])
def display_output(value):
    return 'You have entered {}'.format(value)

@app.callback(Output('comparison', 'source'), [Input('input', 'value')])
def update_comparison(value):
    print(value)
    return ["B"]


if __name__ == '__main__':
    app.run_server(debug=True)