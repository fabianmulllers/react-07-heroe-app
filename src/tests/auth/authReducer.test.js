import { authReducer } from "../../auth/authReducer";
import { types } from '../../types/types'


describe('Pruebas authReducer' , () => { 

    const demoUser = {
        logged: false
    } 

    test('debe de retornar el estado por defecto', () => {

        const state = authReducer(demoUser, {})

        expect( state ).toEqual( demoUser )

    })

    test('debe de autenticar y colocar el name del usuario', () => {

        const action = {
            type: types.login,
            payload:{
                name:'Fabian'
            }
        }

        const state = authReducer(demoUser,action )
        expect( state ).toEqual( { logged: true, name: 'Fabian' })
    
    });

    test('debe de borrar el name del usuario y logged en false', () => {

        const action ={
            type: types.logout
        }

        const state = authReducer( demoUser, action)

        expect( state ).toEqual( { logged: false } )
        
    })

});