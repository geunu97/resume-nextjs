import { PropsWithChildren } from 'react';
import ProjectRow from '../project/row';
import { CommonSection } from '../common/CommonSection';
import { IProject } from '../project/IProject';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IProject.Payload;

export const SideProject = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="SIDE PROJECTS">
      <ProjectRow payload={payload} />
    </CommonSection>
  );
}
