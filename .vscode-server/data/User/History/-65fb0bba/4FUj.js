import React from "react";
import { createRoot } from 'react-dom/client';
import 'regenerator-runtime/runtime'

import {category} from './components/category';

const root = createRoot(document.getElementById("root"));
root.render(<category />);