import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { EmptyRowCol } from '.';
import { Style } from './Style';

export function CommonSection({
  title,
  pageBreakBefore,
  children,
}: PropsWithChildren<{ title: string; pageBreakBefore?: boolean }>) {
  return (
    <div className={`mt-5${pageBreakBefore ? ' print-page-break' : ''}`}>
      <EmptyRowCol>
        <Row className="pb-3">
          <Col>
            <h2 style={Style.blue}>
              <span>{title}</span>
            </h2>
          </Col>
        </Row>
        {children}
      </EmptyRowCol>
    </div>
  );
}
