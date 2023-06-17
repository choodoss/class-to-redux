import { Container, Header, Section } from 'components';
import SearchForm from 'components/SearchForm/SearchForm';
import { TodoLister } from 'components/todoList/todoList';

const App = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />
          <TodoLister />
        </Container>
      </Section>
    </>
  );
};

export default App;
