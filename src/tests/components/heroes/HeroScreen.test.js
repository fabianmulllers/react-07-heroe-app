import { shallow, mount } from 'enzyme'
import { MemoryRouter, Route } from 'react-router-dom';
import { HeroeScreen } from '../../../components/heroes/HeroeScreen';

describe('Pruebas en <HeroScreen/>' , () => { 


    const history = {
        length: 10,
        goBack: jest.fn(),
        push:jest.fn()
    }

    
    test('debe de mostrar el componenten redirect si no hay argumentos en los params', () => {
        
        const wrapper = mount( 
            
            <MemoryRouter initialEntries = {['/hero']}>
                <HeroeScreen history={ history } />
            </MemoryRouter>
            
        )

        expect( wrapper.find('Redirect').exists() ).toBe( true );

    });



    test('debe de mostrar un hero si el parama existe y se encuentre', () => {
        
        const wrapper = mount( 
            
            <MemoryRouter initialEntries = {['/hero/marvel-spider']}>
                <Route path="/hero/:heroeId" component={ HeroeScreen } /> 
                {/* <HeroeScreen history={ history } /> */}
            </MemoryRouter>
            
        )

        expect( wrapper.find('.row').exists()).toBe( true );

    });


    test('debe de regresar a la pantalla anterior con push', () => {
        

        const history = {
            length: 1,
            goBack: jest.fn(),
            push:jest.fn()
        }


        const wrapper = mount( 
            
            <MemoryRouter initialEntries = {['/hero/marvel-spider']}>
                <Route 
                    path="/hero/:heroeId" 
                    component={ (props) =>  <HeroeScreen history={ history } /> }   
                /> 
                {/* <HeroeScreen history={ history } /> */}
            </MemoryRouter>
            
        )

        wrapper.find('button').prop('onClick')();

        
        expect( history.push ).toHaveBeenCalledWith('/');
        expect( history.goBack ).not.toHaveBeenCalled();

    });


    test('debe de regresar a la pantalla anterior con goBack', () => {


        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                    path="/hero/:heroeId"
                    component ={ () => <HeroeScreen history={ history } />}
                >
                </Route>
            </MemoryRouter>
        )

        wrapper.find('button').prop('onClick')();
        expect(history.goBack).toHaveBeenCalled();
        expect(history.push).not.toHaveBeenCalled();

    })
    

    test('debe de llamar el redirect si el hero no existe', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spiderasasdasd']}>
                <Route 
                    path="/hero/:heroeId"
                    component ={ () => <HeroeScreen history={ history } />}
                >
                </Route>
            </MemoryRouter>
        )

        expect( wrapper.text() ).toBe('')
            
    })
    

    
    


});