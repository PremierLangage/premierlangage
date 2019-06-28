import { Directive, ElementRef, OnInit, Input, OnDestroy } from '@angular/core';
import { IResource, ResourceTypes } from '../models/resource.model';
import { folderIcons } from '../models/folder-icons';
import { isRoot } from '../models/filters.model';
import { extname } from 'src/app/shared/models/paths.model';
import { fileIcons } from '../models/file-icons';
import { Subscription } from 'rxjs';
import { ResourceService } from '../services/core/resource.service';

const BASE_DIR = 'static/filebrowser/app/assets/icons/explorer/';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[resourceIcon]'
})
export class ResourceIconDirective implements OnInit, OnDestroy {

    private subscription: Subscription;
    @Input('resourceIcon')
    resource: IResource;

    constructor(private readonly el: ElementRef, private readonly resources: ResourceService) {
    }

    ngOnInit() {
        this.subscription = this.resources.focusChanged.subscribe(focus => {
            if (focus && this.resource && focus.path === this.resource.path) {
                this.resource = focus;
                this.refresh();
            }
        });
        this.refresh();
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    refresh() {
        const element = this.el.nativeElement;
        let path = '';
        if (this.resource) {
          if (this.resource.type === ResourceTypes.Folder) {
              const theme = folderIcons[0];
              path = BASE_DIR + theme.defaultIcon.name;
              if (isRoot(this.resource)) {
                  path = BASE_DIR + theme.rootFolder.name;
              } else {
                const icon = theme.icons.find(item => item.folderNames.includes(this.resource.name.toLowerCase()));
                if (icon) {
                    path = BASE_DIR + icon.name;
                }
              }
              if (this.resource.expanded) {
                path += '-open';
              }
              path += '.svg';
          } else {
            const extension = extname(this.resource.path);
            const icon =  fileIcons.icons.find(item => {
              return (item.fileExtensions || []).includes(extension);
            }) || fileIcons.defaultIcon;
            path = BASE_DIR + icon.name + '.svg';
          }
        } else {
          path = 'file.svg';
        }
        element.src = path;
        element.style.width = '16px';
        element.style.height = '16px';
        element.style.marginRight = '4px';
    }
}
