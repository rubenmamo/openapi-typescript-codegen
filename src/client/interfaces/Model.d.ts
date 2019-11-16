import { ModelProperty } from './ModelProperty';
import { Enum } from './Enum';

export interface Model {
    name: string;
    type: string;
    base: string;
    template: string | null;
    description: string | null;
    extends: string[];
    imports: string[];
    enum: Enum[];
    properties: Map<string, ModelProperty>;
}
