import axios from 'axios'

import AxiosMockAdapter from 'axios-mock-adapter';
import React from "react";

const instance = new AxiosMockAdapter(axios, { delayResponse: 0 });

instance.onGet('/pizza/all', { params: {  base: null, type: null } }).reply(200, {
    veg: [
        {
            name: 'Batman Pizza',
            crust: 'Thin',
            cheese: 'Burst',
            price: '300.00',
            image: "/pizzaveg1.jpg"

        },
        {
            name: 'Superman Pizza',
            crust: 'Multigrain',
            cheese: 'No',
            price: '500.00',
            image: "/vegpizza2.jpg"
        },
        {
            name: 'Thor Pizza',
            crust: 'Flat Bread',
            cheese: 'Topping',
            price: '200.00',
            image: "/pizzaveg1.jpg"
        },
        {
            name: 'Iron Man Pizza',
            crust: 'Regular',
            cheese: 'Burst',
            price: '500.00',
            image: "/vegpizza2.jpg"
        },
    ],
    nonVeg: [
        {
            name: 'Loki Pizza',
            crust: 'Thin',
            cheese: 'Burst',
            price: '600.00',
            image: "/nonveg.jpg"
        },
        {
            name: 'Thanos Pizza',
            crust: 'Regular',
            cheese: 'Burst',
            price: '500.00',
            image: "/nonveg2.jpg"
        },
        {
            name: 'Nazi Pizza',
            crust: 'Flat Bread',
            cheese: 'Topping',
            price: '200.00',
            image: "/nonveg.jpg"
        },
    ],
});

instance.onGet("/pizza/all/crust", { params: { base: "thin", type: null } }).reply(200, {
    veg: [
        {
            name: 'Batman Pizza',
            crust: 'Thin',
            cheese: 'Burst',
            price: '300.00',
            image: "/vegpizza2.jpg"

        },
    ],
    nonVeg: [
        {
            name: 'Loki Pizza',
            crust: 'Thin',
            cheese: 'Burst',
            price: '600.00',
            image: "/nonveg.jpg"
        },
    ],
});

instance.onGet("/pizza/all/crust", { params: { base: "regular", type: null } }).reply(200, {
    veg: [
        {
            name: 'Iron Man Pizza',
            crust: 'Regular',
            cheese: 'Burst',
            price: '500.00',
            image: "/pizzaveg1.jpg"
        },
    ],
    nonVeg: [
        {
            name: 'Thanos Pizza',
            crust: 'Regular',
            cheese: 'Burst',
            price: '500.00',
            image: "/nonveg.jpg"
        },
    ],
});

instance.onGet("/pizza/all/crust", { params: { base: "flat", type: null } }).reply(200, {
    veg: [
        {
            name: 'Thor Pizza',
            crust: 'Flat Bread',
            cheese: 'Topping',
            price: '200.00',
            image: "/pizzaveg1.jpg"
        },
    ],
    nonVeg: [
        {
            name: 'Nazi Pizza',
            crust: 'Flat Bread',
            cheese: 'Topping',
            price: '200.00',
            image: "/nonveg.jpg"
        },
    ],
});

instance.onGet("/pizza/all/crust", { params: { base: "multigrain", type: null } }).reply(200, {
    veg: [
        {
            name: 'Rainy Pizza',
            crust: 'Multigrain',
            cheese: 'No',
            price: '500.00',
            image: "/pizzaveg1.jpg"
        },
    ],
    nonVeg: [
        {
            name: 'NonVeg Pizza',
            crust: 'Multigrain',
            cheese: 'No',
            price: '500.00',
            image: "/nonveg.jpg"
        },
    ],
});

instance.onGet("/pizza/all/type", { params: { base: "thin", type: "cheese"  } }).reply(200, {
    veg: [
        {
            name: 'Batman Pizza',
            crust: 'Thin',
            cheese: 'Burst',
            price: '300.00',
            image: "/vegpizza2.jpg"

        },
        {
            name: 'Iron Man Pizza',
            crust: 'Regular',
            cheese: 'Burst',
            price: '500.00',
            image: "/pizzaveg1.jpg"
        },
    ],
    nonVeg: [
        {
            name: 'Loki Pizza',
            crust: 'Thin',
            cheese: 'Burst',
            price: '600.00',
            image: "/nonveg.jpg"
        },
    ],
});

instance.onGet("/pizza/all/type", { params: { base: "thin", type: "topping"  } }).reply(200, {
    veg: [
        {
            name: 'Thor Pizza',
            crust: 'Flat Bread',
            cheese: 'Topping',
            price: '200.00',
            image: "/pizzaveg1.jpg"
        },
    ],
    nonVeg: [
        {
            name: 'Loki Pizza',
            crust: 'Thin',
            cheese: 'Topping',
            price: '600.00',
            image: "/nonveg.jpg"
        },
    ],
});

instance.onGet("/pizza/all/type", { params: { base: "thin", type: "no"  } }).reply(200, {
    veg: [
        {
            name: 'Rainy Pizza',
            crust: 'Multigrain',
            cheese: 'No',
            price: '500.00',
            image: "/pizzaveg1.jpg"
        },
    ],
    nonVeg: [
        {
            name: 'Loki Pizza',
            crust: 'Thin',
            cheese: 'Burst',
            price: '600.00',
            image: "/nonveg.jpg"
        },
    ],
});

instance.onGet("/pizza/all/type", { params: { base: "regular", type: "cheese"  } }).reply(200, {
    veg: [
        {
            name: 'Iron Man Pizza',
            crust: 'Regular',
            cheese: 'Burst',
            price: '500.00',
            image: "/pizzaveg1.jpg"
        },
    ],
    nonVeg: [
        {
            name: 'Loki Pizza',
            crust: 'Thin',
            cheese: 'Burst',
            price: '600.00',
            image: "/nonveg.jpg"
        },
    ],
});

instance.onGet("/pizza/all/type", { params: { base: "regular", type: "topping"  } }).reply(200, {
    veg: [
        {
            name: 'Iron Man Pizza',
            crust: 'Regular',
            cheese: 'Burst',
            price: '500.00',
            image: "/pizzaveg1.jpg"
        },
    ],
    nonVeg: [
        {
            name: 'Nazi Pizza',
            crust: 'Flat Bread',
            cheese: 'Topping',
            price: '200.00',
            image: "/nonveg.jpg"
        },
    ],
});

instance.onGet("/pizza/all/type", { params: { base: "regular", type: "no"  } }).reply(200, {
    veg: [
        {
            name: 'Iron Man Pizza',
            crust: 'Regular',
            cheese: 'Burst',
            price: '500.00',
            image: "/pizzaveg1.jpg"
        },
    ],
    nonVeg: [
        {
            name: 'Rainy Pizza',
            crust: 'Multigrain',
            cheese: 'No',
            price: '500.00',
            image: "/pizzaveg1.jpg"
        },
    ],
});

instance.onGet("/pizza/all/type", { params: { base: "flat", type: "cheese"  } }).reply(200, {
    veg: [
        {
            name: 'Thor Pizza',
            crust: 'Flat Bread',
            cheese: 'Topping',
            price: '200.00',
            image: "/pizzaveg1.jpg"
        },
    ],
    nonVeg: [
        {
            name: 'Loki Pizza',
            crust: 'Thin',
            cheese: 'Burst',
            price: '600.00',
            image: "/nonveg.jpg"
        },
    ],
});

instance.onGet("/pizza/all/type", { params: { base: "flat", type: "topping"  } }).reply(200, {
    veg: [
        {
            name: 'Thor Pizza',
            crust: 'Flat Bread',
            cheese: 'Topping',
            price: '200.00',
            image: "/pizzaveg1.jpg"
        },
    ],
    nonVeg: [
        {
            name: 'Nazi Pizza',
            crust: 'Flat Bread',
            cheese: 'Topping',
            price: '200.00',
            image: "/nonveg.jpg"
        },
    ],
});

instance.onGet("/pizza/all/type", { params: { base: "flat", type: "no"  } }).reply(200, {
    veg: [
        {
            name: 'Nazi Pizza',
            crust: 'Flat Bread',
            cheese: 'Topping',
            price: '200.00',
            image: "/nonveg.jpg"
        },
    ],
    nonVeg: [
        {
            name: 'Nazi Pizza',
            crust: 'Flat Bread',
            cheese: 'Topping',
            price: '200.00',
            image: "/nonveg.jpg"
        },
    ],
});


instance.onGet("/pizza/all/type", { params: { base: "multigrain", type: "cheese"  } }).reply(200, {
    veg: [
        {
            name: 'Rainy Pizza',
            crust: 'Multigrain',
            cheese: 'No',
            price: '500.00',
            image: "/pizzaveg1.jpg"
        },
    ],
    nonVeg: [
        {
            name: 'Loki Pizza',
            crust: 'Thin',
            cheese: 'Burst',
            price: '600.00',
            image: "/nonveg.jpg"
        },
        {
            name: 'Thanos Pizza',
            crust: 'Regular',
            cheese: 'Burst',
            price: '500.00',
            image: "/nonveg.jpg"
        },
    ],
});

instance.onGet("/pizza/all/type", { params: { base: "multigrain", type: "topping"  } }).reply(200, {
    veg: [
        {
            name: 'Rainy Pizza',
            crust: 'Multigrain',
            cheese: 'No',
            price: '500.00',
            image: "/pizzaveg1.jpg"
        },
    ],
    nonVeg: [
        {
            name: 'Nazi Pizza',
            crust: 'Flat Bread',
            cheese: 'Topping',
            price: '200.00',
            image: "/nonveg.jpg"
        },
    ],
});

instance.onGet("/pizza/all/type", { params: { base: "multigrain", type: "no"  } }).reply(200, {
    veg: [
        {
            name: 'Rainy Pizza',
            crust: 'Multigrain',
            cheese: 'No',
            price: '500.00',
            image: "/pizzaveg1.jpg"
        },
    ],
    nonVeg: [],
});


instance.onGet("/pizza/all/type", { params: { base: null, type: "cheese"  } }).reply(200, {
    veg: [
        {
            name: 'Batman Pizza',
            crust: 'Thin',
            cheese: 'Burst',
            price: '300.00',
            image: "/vegpizza2.jpg"

        },
        {
            name: 'Iron Man Pizza',
            crust: 'Regular',
            cheese: 'Burst',
            price: '500.00',
            image: "/pizzaveg1.jpg"
        },
    ],
    nonVeg: [
        {
            name: 'Loki Pizza',
            crust: 'Thin',
            cheese: 'Burst',
            price: '600.00',
            image: "/nonveg.jpg"
        },
    ],
});

instance.onGet("/pizza/all/type", { params: { base: null, type: "topping"  } }).reply(200, {
    veg: [
        {
            name: 'Thor Pizza',
            crust: 'Flat Bread',
            cheese: 'Topping',
            price: '200.00',
            image: "/pizzaveg1.jpg"
        },
    ],
    nonVeg: [
        {
            name: 'Nazi Pizza',
            crust: 'Flat Bread',
            cheese: 'Topping',
            price: '200.00',
            image: "/nonveg.jpg"
        },
    ],
});

instance.onGet("/pizza/all/type", { params: { base: null, type: "no"  } }).reply(200, {
    veg: [
        {
            name: 'Rainy Pizza',
            crust: 'Multigrain',
            cheese: 'No',
            price: '500.00',
            image: "/pizzaveg1.jpg"
        },
    ],
    nonVeg: [],
});


