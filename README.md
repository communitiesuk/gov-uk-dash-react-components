# UK Gov dash components

UK Gov dash components is a Dash component library.

### Install dependencies

If you have selected install_dependencies during the prompt, you can skip this part.

1. Install npm packages
    ```
    npm install
    ```
2. Create conda environment 
    ```
    conda env create -f environment.yml 
    ```

### Write your component code in `src/lib/components/UkGovDashComponents.react.js`.

- The demo app is in `src/demo` and you will import your example component code into your demo app.
- Test your code in a Python environment:
    1. Build your code
        ```
        npm run build
        ```
    2. Run and modify the `example.py` sample dash app:
        ```
        python example.py
        ```
    3. Visit http://localhost:8050 in your web browser

- Write tests for your component.
    - A sample test is available in `tests/test_example.py`, it will load `example.py` and you can then automate interactions with selenium.
    - Run the tests with `pytest tests`.
    - The Dash team uses these types of integration tests extensively. Browse the Dash component code on GitHub for more examples of testing (e.g. https://github.com/plotly/dash-core-components)
- Add custom styles to your component by putting your custom CSS files into your distribution folder (`uk_gov_dash_components`).
    - Make sure that they are referenced in `MANIFEST.in` so that they get properly included when you're ready to publish your component.
    - Make sure the stylesheets are added to the `_css_dist` dict in `uk_gov_dash_components/__init__.py` so dash will serve them automatically when the component suite is requested.
- [Review your code](./review_checklist.md)

### Create a production build and publish:

1. Build your code:
    ```
    npm run build
    ```
2. Create a Python distribution
    ```
    python setup.py sdist bdist_wheel
    ```
    This will create source and wheel distribution in the generated the `dist/` folder.
    See [PyPA](https://packaging.python.org/guides/distributing-packages-using-setuptools/#packaging-your-project)
    for more information.

3. Test your tarball by copying it's full file path and installing it locally into a new environment by running:
    ```
    pip install "<full file path>"
    ```
    eg. `pip install "D:\Users\user\Desktop\Source Code Store\gov-uk-dash-react-components\dist\uk_gov_dash_components-1.2.1.tar.gz"`

4. For creating new versions of the package:
    - After merging with master, go [here](https://github.com/communitiesuk/gov-uk-dash-react-components/releases/) to add a new version tag.
    - Click 'Draft a new release'
    - Under 'Choose a tag' dropdown, enter 'v&lt;version number&gt;'. Click 'Create new tag'
    - Give the tag a release title, this should be the same as the tag name.
    - Give a bullet point list of changes in the "Describe this release" section.
    - Make sure 'Target' is set to 'main'.
    - Click 'Publish release'.
