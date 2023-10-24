import { useMemo } from 'react';
import { Tabs, Tab as MuiTab, TabProps, styled } from '@mui/material';

import type { IPlayer } from '@/types';
import { CLASS_AND_SPECS } from '@/constants/filterSchema';
import { getSpecIcon } from '@/utils/table';

const arenaAndRbg = [
  { name: 'ARENA_2v2', title: '2v2' },
  { name: 'ARENA_3v3', title: '3v3' },
  { name: 'BATTLEGROUNDS', title: 'RBG' },
];

const Tab = styled((props: TabProps) => <MuiTab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(14),
  marginRight: theme.spacing(1),
  height: '32px',
  minHeight: '32px',
  minWidth: 'auto',
}));

const BracketTabs = ({
  player,
  value,
  onChange,
}: {
  player: IPlayer;
  value: string;
  onChange: (_evt: React.SyntheticEvent, value: any) => void;
}) => {
  const shuffleBrackets = useMemo(() => {
    const classAndSpec = CLASS_AND_SPECS[player.class] as string[];

    return classAndSpec.map((spec) => {
      const bracket = player?.brackets?.find(({ bracket_type }) => bracket_type.includes(spec));
      return { bracket, spec };
    });
  }, [player]);

  return (
    <Tabs
      className="!min-h-[38px]"
      value={value}
      onChange={onChange}
      textColor="primary"
      indicatorColor="primary"
    >
      <Tab label="All" value="all" />

      {arenaAndRbg.map(({ title, name }) => {
        const bracket = player?.brackets?.find(({ bracket_type }) => bracket_type === name);
        if (!bracket) return null;

        return (
          <Tab
            key={name}
            label={`${title} (${bracket?.gaming_history?.history?.length ?? 0})`}
            value={name}
          />
        );
      })}
      {shuffleBrackets.map(({ bracket, spec }) => {
        const specIcon = getSpecIcon(`${spec} ${player.class}` || '');
        if (!bracket) return null;

        return (
          <Tab
            key={spec}
            value={spec}
            icon={
              <div className="flex items-center">
                <img
                  className="h-7 w-7 rounded border border-solid border-[#37415180]"
                  src={specIcon}
                  alt={spec}
                />
                <span className="text-base ml-1">
                  ({bracket?.gaming_history?.history?.length ?? 0})
                </span>
              </div>
            }
          />
        );
      })}
    </Tabs>
  );
};

export default BracketTabs;
