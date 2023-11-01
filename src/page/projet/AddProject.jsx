import { ButtonInput } from '../../component/input/ButtonInput.jsx';
import { Input } from '../../component/input/Input.jsx';
import { Select } from '../../component/select/Select.jsx';

export const AddProject = () => {
    const items = [
        {'id' : 1, 'name': 'Architecture Logicielle'},
        {'id' : 2, 'name': 'Web Avancé'},
        {'id' : 3, 'name': 'Conception Orienté Objet'}
    ];
    return (
        <div className='mt-10 shadow-md rounded-lg max-w-sm p-10 mx-auto'>
            <h1 className='text-4xl mb-10 text-center'>Ajout de projet</h1>
            <Input title="Nom" />
            <Select title="Matiere" items={items} />
            <Input title="Deadline" type={'date'} />
            <ButtonInput title={'Ajouter'} />
        </div>
    );
}