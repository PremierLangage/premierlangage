import { Component, OnInit, Input, ViewChild, OnDestroy } from '@angular/core';
import { ResourceService } from '../../shared/services/resource.service';
import { ITreeOptions } from 'src/app/shared/models/tree.model';
import { IResource } from '../../shared/models/resources.model';
import { TreeComponent } from 'src/app/shared/components/tree/tree.component';
import { OpenerService } from '../../shared/services/opener.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {


    query: string;
    empty: boolean;
    pattern: RegExp;

    readonly treeOptions: ITreeOptions<ISearchItem> = {
        id: 'editor.search.tree',
        idField: 'id',
        onDidClick: this.onDidClick.bind(this)
    };

    @ViewChild(TreeComponent, { static: true })
    tree: TreeComponent<ISearchItem>;

    nodes: ISearchItem[] = [];

    constructor(
        private readonly opener: OpenerService,
        private readonly resources: ResourceService,
    ) { }

    ngOnInit() {
        this.query = localStorage.getItem('editor.search.query');
        setTimeout(() => {
            if (this.query) {
                this.filter();
            }
        }, 300);
    }

    ngOnDestroy(): void {
        this.query = this.query || '';
        localStorage.setItem('editor.search.query', this.query);
    }

    async search(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            await this.filter();
        }
    }

    onDidClick(node: ISearchItem) {
        if (node.children) {
            this.tree.toggleNode(node);
        } else {
            this.opener.open(node.resource.path, {
                position: {
                    line: node.lineno,
                    column: 0
                }
            });
        }
    }

    private async filter() {
        this.query = this.query.trim().toLocaleLowerCase();
        this.pattern = new RegExp(this.query, 'gi');
        if (this.query) {
            try {
                const home = await this.resources.search(this.resources.home, this.query);
                const lib = await this.resources.search(this.resources.lib, this.query);
                const response = [...home, ...lib];
                this.nodes = response.map(item => {
                    const { path, name } = item.resource;
                    return {
                        id: path,
                        name: name,
                        resource: item.resource,
                        children: item.matches.map((match, index) => {
                            return {
                                id: path + '#' + index,
                                name: match.match,
                                lineno: match.lineno,
                                resource: item.resource
                            } as ISearchItem;
                        })
                    } as ISearchItem;
                });
                this.empty = this.nodes.length === 0;
            } catch {
                this.empty = true;
                this.nodes = [];
            }
        }
    }

}

interface ISearchItem {
    id: string;
    name: string;
    lineno?: number;
    resource: IResource;
    children: ISearchItem[];
}
