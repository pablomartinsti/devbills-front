import { useCallback, useState } from 'react';
import { Dialog } from '../dialog';
import { Button } from '../button';
import { Title } from '../title';
import { Input } from '../input';
import { Container } from './styles';

export function CreateCategoryDialog() {
  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  const onSubmitClose = useCallback(() => {
    handleClose();
  }, [handleClose]);

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      trigger={<Button>Nova Categoria</Button>}
    >
      <Container>
        <Title
          title="Nova Categoria"
          subtitle="Crie uma nova categoria para suas transações"
        />

        <form>
          <div>
            <Input label="nome" placeholder="Nome da categoria" />
            <Input label="cor" type="color" />
          </div>
          <footer>
            <Button onClick={handleClose} variant="outline" type="button">
              Calcelar
            </Button>
            <Button onClick={onSubmitClose} type="button">
              Cadastrar
            </Button>
          </footer>
        </form>
      </Container>
    </Dialog>
  );
}
