
module UkGovDashComponents
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "1.2.2"

include("jl/govuk_autocomplete.jl")
include("jl/govuk_checkboxlist.jl")
include("jl/govuk_componenttemplate.jl")
include("jl/govuk_dropdown.jl")
include("jl/govuk_ukgovdashcomponents.jl")
include("jl/govuk_dropdownarrowdown.jl")
include("jl/govuk_status.jl")
include("jl/govuk_combobox.jl")
include("jl/govuk_listbox.jl")
include("jl/govuk_popover.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "uk_gov_dash_components",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "async-UkGovDashComponents.js",
    external_url = "https://unpkg.com/uk_gov_dash_components@1.2.2/uk_gov_dash_components/async-UkGovDashComponents.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-UkGovDashComponents.js.map",
    external_url = "https://unpkg.com/uk_gov_dash_components@1.2.2/uk_gov_dash_components/async-UkGovDashComponents.js.map",
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
