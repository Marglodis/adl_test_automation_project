Feature: Gestión de productos para usuarios registrados
    Como usuario registrado
    Quiero poder acceder al sistema
    y realizar la consulta de productos
Scenario: Usuario registrado consulta productos
    Given el usuario está logueado en el dashboard
    When navega a la sección de productos
    Then debe ver la lista de productos disponibles
    And consultar un producto del listado

Scenario: Usuario registrado registra un nuevo producto
    Given el usuario está logueado en el dashboard
    When registra un nuevo producto con nombre "Iphone 18"
    Then el producto "Iphone 18" debería estar en la lista