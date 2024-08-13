# UK Gov Dash components

UK Gov Dash components is a Dash component library which provides [GOV.UK styled][design-system] components for:

- Accordion
- AutoComplete Dropdown
- Checklist

[design-system]: https://design-system.service.gov.uk/

⚠️ We intentionally only provide support for Python Dash projects.
If you are interested in Julia or R support please contact the team <PythonVisualisations@levellingup.gov.uk>.

## Using the package from Python

For installation using pip:
```sh
pip install uk-gov-dash-components
```

or for a specific version:
```sh
pip install uk-gov-dash-components~=6.7.0
```

For installation into a conda environment, paste the following code into the environment configuration file:
```yml
 - pip:
     - uk-gov-dash-components~=6.7.0
```

## Contributing to this package

Plotly Dash have written some documentation on
[React for Python Developers](https://dash.plotly.com/react-for-python-developers)
which acts as good starting point.

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

### Create a new component

Use the `ComponentTemplate` component as a template.
This component is class based, while other components in this repository are functions.
You can read more about [function components in the React documentation](https://reactjs.org/docs/components-and-props.html#function-and-class-components). 

1. Copy `src/lib/components/ComponentTemplate.react.js` -> `src/lib/components/YourComponent.react.js`
1. Copy `src/lib/fragments/ComponentTemplate.react.js` -> `src/lib/fragments/YourComponent.react.js`
1. Modify the newly created files, replacing all references to `ComponentTemplate` with `YourComponent`, and replacing the sample functionality with what you'd like.
1. Add both an import and export of `YourComponent` to both `src/lib/index.js` and `src/lib/LazyLoader.js`
1. Add `YourComponent` to the import at the top of the `src/demo/App.js` file, and add `<YourComponent>` to the App.render() function.
    1. Run `npm start` to start the demo server.
    1. Open http://localhost:8000 in your browser.
    1. If nothing apears on the page, then open up the browser console to see the error(s).

### Test your code within a Dash Application

If you've previously been running `npm start` you've been running your component within a pure React environment separate to Dash.

1. Build your code which will generate all the Python code required
    ```
    npm run build
    ```
2. Run the `example.py` sample Dash app:
    ```
    python example.py
    ```
3. Visit http://localhost:8050 in your web browser
4. Add your component to `example.py` using the existing Python as a template.

### Write tests for your component.

__These are the default instructions__

- A sample test is available in `tests/test_example.py`, it will load `example.py` and you can then automate interactions with selenium.
- Run the tests with `pytest tests`.
- The Dash team uses these types of integration tests extensively. Browse the Dash component code on GitHub for more examples of testing (e.g. https://github.com/plotly/dash-core-components)

### Add custom styles to your component

__These are the default instructions__

- Add custom styles to your component by putting your custom CSS files into your distribution folder (`uk_gov_dash_components`).
    - Make sure that they are referenced in `MANIFEST.in` so that they get properly included when you're ready to publish your component.
    - Make sure the stylesheets are added to the `_css_dist` dict in `uk_gov_dash_components/__init__.py` so dash will serve them automatically when the component suite is requested.
- [Review your code](./review_checklist.md)

### Create a production build and publish:
1. Update the `version` property of the `package.json` file in the style of Major.Minor.Patch, e.g. 1.2.3
    - Major - any breaking changes to previous functionality.
    - Minor - additional functionality that doesn't effect backward compatibility. When updated the patch version should be reset to zero. eg. 2.3.1 goes to 2.4.0 for minor update.
    - Patch - bug fixes that don't effect backward compatibility.
    For more information see [here](https://semver.org)
1. Build your code:
    ```
    npm run build
    ```
1. Create a Python distribution
    ```
    python setup.py sdist bdist_wheel
    ```
    This will create source and wheel distribution in the generated the `dist/` folder.
    See [PyPA](https://packaging.python.org/guides/distributing-packages-using-setuptools/#packaging-your-project)
    for more information.

1. Test your tarball by copying it's full file path and installing it locally into a new environment by running:
    ```
    pip install "<full file path>"
    ```
    eg. `pip install "D:\Users\user\Desktop\Source Code Store\gov-uk-dash-react-components\dist\uk_gov_dash_components-1.2.1.tar.gz"`

1. When your PR is merged to main, it will be released automatically by the [Release workflow](.github/workflows/release.yml) using the version within [package.json](package.json).
   You can still merge a PR which doesn't update the version within `package.json`, but the Release workflow will fail.
   Failure of the Release workflow means that a new release won't have been generated, the changes made to the package will not have been uploaded to PyPI and you won't be able to use the new version of the code in dashboard repos until you update the version in `package.json`. 

### Dependencies and the Release workflow:

#### Troubleshooting


Dependencies are specified in the `package.json` file and installed via `npm install`. 
Sometimes dependencies will need updating and we will get vulnerability warnings/errors.
Here are some troubleshooting steps to take by running locally or adding to the github actions workflow file (`release.yml`):
1. run `npm audit fix` 
1. If that doesn't work try deleting the `node_modules` folder and the `package-lock.json` file and running `npm install` again
1. If that doesn't work take a closer look at the affected dependency by running for example `npm ls glob-parent` where `glob-parent` is the dependency that has the vulnerability warning. This will print out the dependencies in a tree-like fashion. You can try updating the top-level dependency or the dependency itself. For example if we want to update glob-parent to version 6.0.2 we run `npm install glob-parent@6.0.2` followed by `npm update` to update all packages to their latest versions. Another alternative if `glob-parent` is being installed by another package we can overide the version by adding the following to the package.json file 
  `"overrides": {
    "chokidar": "3.5.3",
    "glob-parent": "6.0.2"
  }` 
  and then running `npm update` (note: need to add `npm update` to the workflow file if running github actions).

#### Node version 

15/08/2023
We upgraded to Node version 20 and rectified the `err_ossl_evp_unsupported` error by adding a workaround to the package.json file as follows: 
` "build:js": "node --openssl-legacy-provider ./node_modules/webpack/bin/webpack.js --mode production", `
We are now running Node with the `--openssl-legacy-provider` flag which means it will continue to use the legacy provider of the OpenSSL library. 
This may not be neccessary in future as more libraries start to use use the more up to date version of OpenSSL. 
It should also be noted that it is a possiblilty Node will stop supporting this flag in future. 

Sept 2023 : Node updated to version 18.17.1 on the DAP - request upgrade to node from DAP team.
