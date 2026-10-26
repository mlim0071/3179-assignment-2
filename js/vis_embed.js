// Section 1: Introduction Chart
var spec_donut = "vis/donut_chart.vg.json";
vegaEmbed("#donut_chart", spec_donut).catch(console.error);

// Section 2: Trends Charts
var spec_line = "vis/line_chart.vg.json";
vegaEmbed("#line_chart", spec_line).catch(console.error);

var spec_area = "vis/stacked_area_chart.vg.json";
vegaEmbed("#area_chart", spec_area).catch(console.error);

// Section 3: Household Preferences Charts
var spec_lollipop = "vis/lollipop_chart.vg.json";
vegaEmbed("#lollipop_chart", spec_lollipop).catch(console.error);

var spec_dotplot = "vis/dotplot_households.vg.json";
vegaEmbed("#dotplot_households", spec_dotplot).catch(console.error);

var spec_hbar = "vis/vertical_bar_chart.vg.json";
vegaEmbed("#vertical_bar", spec_hbar).catch(console.error);

// Section 4: Maps & Demographics (3 Mandatory Map Idioms)
var spec_map1 = "vis/choropleth_map.vg.json";
vegaEmbed("#map1", spec_map1).catch(console.error);

//var spec_map2 = "vis/symbol_map.vg.json";
//vegaEmbed("#map2", spec_map2).catch(console.error);

//var spec_map3 = "vis/bubble_map.vg.json";
//vegaEmbed("#map3", spec_map3).catch(console.error);

//var spec_heatmap = "vis/demographic_heatmap.vg.json";
//vegaEmbed("#demographic_heatmap", spec_heatmap).catch(console.error);

 //Section 5: Conclusion Chart
var spec_conclusion = "vis/conclusion_chart.vg.json";
vegaEmbed("#conclusion_chart", spec_conclusion).catch(console.error);