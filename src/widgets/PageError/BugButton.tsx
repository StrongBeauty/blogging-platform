import { Button } from 'shared/ui/Button';
import { useEffect, useState } from 'react';

export const BugButton = () => {
  const [error, setError] = useState(false);

  const onThrow = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
  // eslint-disable-next-line i18next/no-literal-string
    <Button style={{ margin: '20px' }} onClick={onThrow}>
      throw Error
    </Button>
  );
};
