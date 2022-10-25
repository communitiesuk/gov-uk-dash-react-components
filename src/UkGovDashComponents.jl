
module UkGovDashComponents
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "1.6.1"

include("jl/'govuk'_accordion.jl")
include("jl/'govuk'_autocomplete.jl")
include("jl/'govuk'_checkboxlist.jl")
include("jl/'govuk'_componenttemplate.jl")
include("jl/'govuk'_dropdown.jl")
include("jl/'govuk'_dropdownarrowdown.jl")
include("jl/'govuk'_expandablemenuitem.jl")
include("jl/'govuk'_status.jl")
include("jl/'govuk'_combobox.jl")
include("jl/'govuk'_listbox.jl")
include("jl/'govuk'_popover.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "uk_gov_dash_components",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "async-UkGovDashComponents.js",
    external_url = "https://unpkg.com/uk_gov_dash_components@1.6.1/uk_gov_dash_components/async-UkGovDashComponents.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-UkGovDashComponents.js.map",
    external_url = "https://unpkg.com/uk_gov_dash_components@1.6.1/uk_gov_dash_components/async-UkGovDashComponents.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "uk_gov_dash_components.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "uk_gov_dash_components.min.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
