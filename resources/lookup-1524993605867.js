(function(window, undefined) {
  var dictionary = {
    "7b96d242-338a-411e-bded-2b8e5e432554": "documentos",
    "46b3e4fc-84ff-43b4-8102-89233c19a89b": "LogIn",
    "6a7b19ed-8150-4549-9ee8-859e81deecf1": "Insertar caso",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Splash",
    "4f23fd61-a017-4ec0-838a-eb1e243a06b3": "principal",
    "0b2c55d9-4cf6-4101-8509-994ff28dab3d": "clientes",
    "a8acf375-48ec-42e5-bb6e-35597d494863": "Abogados",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);