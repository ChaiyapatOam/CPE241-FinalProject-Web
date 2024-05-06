import React from 'react';
import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';

type Props = {
    value:string
  };

const onChange: CheckboxProps['onChange'] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const App: React.FC = (Props : props) => <Checkbox onChange={onChange}>{Props.value}</Checkbox>;

export default App;