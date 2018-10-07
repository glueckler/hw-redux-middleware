// any time jest starts in project..
// jest will look for setupTests.js and execute before anything
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// now we can make use of enzyme anywhere in our tests
Enzyme.configure({ adapter: new Adapter() })
