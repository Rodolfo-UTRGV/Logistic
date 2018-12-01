import Adapter from '../../../adapter';

class User extends Adapter.Model
{
    get tableName()
    {
        return 'users';
    }

    get hasTimestamps()
    {
        return false;
    }
}

export default Adapter.model('User', User);