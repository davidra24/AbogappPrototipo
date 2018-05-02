(function(window, undefined) {
  var dictionary = {
    "a8acf375-48ec-42e5-bb6e-35597d494863": "Documentacion",
    "4fc3c4de-2e6a-4d82-9412-d7ab38babd5e": "documentado",
    "7b96d242-338a-411e-bded-2b8e5e432554": "documentos",
    "45d5a7a9-cbe2-4dc3-a483-c3410a1c102b": "documentado2",
    "f36d6439-97ad-4832-9b08-4737d310aef4": "Agregar clientes",
    "cdd2eea8-e21f-4394-bf56-298cc7b23233": "detalle caso",
    "96e6acb9-8d47-4c1e-8e53-36652bcc0fe3": "Editar caso",
    "95956fbf-b7a6-4b6d-b17f-87c7a654642d": "documentos3",
    "0fafee8d-2e8d-40b2-b18e-eb5441404c72": "documentos2",
    "0b2c55d9-4cf6-4101-8509-994ff28dab3d": "clientes",
    "4f23fd61-a017-4ec0-838a-eb1e243a06b3": "principal",
    "46b3e4fc-84ff-43b4-8102-89233c19a89b": "LogIn",
    "00bf61dd-63a5-4b30-b6f1-6f5b49cfeee1": "register",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Splash",
    "6a7b19ed-8150-4549-9ee8-859e81deecf1": "Insertar caso",
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