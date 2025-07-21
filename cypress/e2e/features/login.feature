Feature: acceder al sistema y realizar la consulta de productos

Scenario:
    Given el usuario está logueado en el dashboard
    When navega a la sección de productos
    Then debe ver la lista de productos disponibles
    And consultar un producto del listado